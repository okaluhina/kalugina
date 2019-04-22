import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    display: 'block',
    backgroundPosition: 'center',
    height: '150px',
    width: '150px'
  },
  content: {
    padding: '0 0'
  },
  container: {
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  helperText: {
    marginTop: theme.spacing.unit,
  }
});

function BookingCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <Grid container spacing={8} className={classes.container}>
        <Grid item xs={12} sm={6} >
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            client name
          </Typography>
          <Typography variant="body2">Jone Doe</Typography>
          </Grid>
          <Grid item xs={12} sm={6} >
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            contacts
          </Typography>
          <Typography variant="body2">jonedoe@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={12} >
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            address
          </Typography>
          <Typography variant="body2">
            town and street and apartment and maybe something else
            town and street and apartment and maybe something else
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            kind and type of cleaning
          </Typography>
          <Typography variant="body2">Spring pool cleaning</Typography>

          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            description
          </Typography>
          <Typography variant="body2">
            3 big rooms, 1 small room, 5 bathrooms
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            frequency
          </Typography>
          <Typography variant="body2">once a month</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            duration
          </Typography>
          <Typography variant="body2">6 months</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            start date
          </Typography>
          <Typography variant="body2">05-20-2017</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            next dates
          </Typography>
          <Typography variant="body2">06-20-2017</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            time
          </Typography>
          <Typography variant="body2">15:30</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            Expected cleaning time
          </Typography>
          <Typography variant="body2">3 hours</Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.helperText}
          >
            price
          </Typography>
          <Typography variant="body2">50.45$</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CardActions>
            <Button size="small" color="primary">
              Cancel
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Confirm
            </Button>
          </CardActions>
        </Grid>
      </Grid>     
    </Card>
  </div>
  );
}

BookingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingCard);








// ● Кнопка «отменить»
// ● Кнопка «подтвердить» (если заказ неактивен)
// При нажатии кнопки отменить, появляется окно подтверждения отмены, содержащее обязательное
// текстовое поле, в котором необходимо указать причину отмены заказа.
// Если заказ «новый», то кнопка подтвердить переводит его в статус «подтвержден». Подтверждение
// сопровождается отправкой письма на