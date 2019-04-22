const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const GooglePlusTokenStrategy = require('passport-google-plus-token');
//const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/user.model');
const config = require("./environment");
//Facebook или Google
const JWT_SECRET = config.jwt.secret;
const GOOGLE_CLIENT_ID = config.google.id;
const GOOGLE_CLIENT_SECRET = config.google.secret;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/redirect"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({'google.id': profile.id});

      if (!user) {
        const newUser = await new User({
          'google.id': profile.id,
          'google.email': profile.emails[0].value,
          username: profile.displayName,
          status: 'active'
        }).save();
        
        return done(null, newUser);
      }

      done(null, user);    
    }
    catch (err) {
      done(err, false);
    }
  }
));


// // passport.use('facebookToken', new FacebookTokenStrategy({
//   clientID: config.oauth.facebook.clientID,
//   clientSecret: config.oauth.facebook.clientSecret
// }, async (accessToken, refreshToken, profile, done) => {
//   try {
//     console.log('profile', profile);
//     console.log('accessToken', accessToken);
//     console.log('refreshToken', refreshToken);
    
//     const existingUser = await User.findOne({ "facebook.id": profile.id });
//     if (existingUser) {
//       return done(null, existingUser);
//     }

//     const newUser = new User({
//       method: 'facebook',
//       facebook: {
//         id: profile.id,
//         email: profile.emails[0].value
//       }
//     });

//     await newUser.save();
//     done(null, newUser);
//   } catch(error) {
//     done(error, false, error.message);
//   }
// }));


// find user based on token
passport.use( new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (!user) {
      return done(null, false);
    }

    done(null, user);    
  }
  catch (err) {
    done(err, false);
  }
}));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ 'local.email': email });
    if (!user) {
      return done(null, false);
    };

    const isMatch =  await user.validatePassword(password);
    if (!isMatch) {
      return done(null, false)
    }
    done(null, user);
  }
  catch (error) {
    done(error, false);
  }
}));




