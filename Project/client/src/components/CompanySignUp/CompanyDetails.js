import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//onChange={this.handleChange('photo')} надо загрузить фото

function CompanyDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Company Details
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12}>
          <TextField
            required
            id="CompanyName"
            name="CompanyName"
            label="Company name"
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="raised" component="span">
              Upload Logo
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            File Name
          </Typography>  
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Description"
            name="Description"
            label="Description"
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="passwordConfirm"
            name="passwordConfirm"
            label="Password Confirmation"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CompanyDetails;