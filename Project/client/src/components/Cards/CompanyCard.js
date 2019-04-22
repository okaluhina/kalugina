import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FormHelperText } from '@material-ui/core';

const styles = {
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
  }
};

// Логотип
// ● Название
// ● Адрес
//className={classes.media}
// ● Рейтинг
// ● Кнопка «заказать услугу»
function BookingCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <Grid container spacing={8} className={classes.container}>
        <Grid item xs={12} sm={4} >
        <CardMedia
          title="Contemplative Reptile"
          image={'/img/cleaning/logo2.png'}
          className={classes.media}
        />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardHeader
            title="Company name"
            subheader="2 Chapel Hill Heswall BOURNEMOUTH  DH1 1AA"
          />
          <CardContent className={classes.content}>
          <div className={classes.rating}>
            <Rating
                disabled={false}
                readOnly={true}
                value={3}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
              <Typography component="p">
                3
              </Typography>
          </div>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardContent>
          <Typography component="p">
            Price
          </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardActions>
            <Button size="small" color="primary">
              Details
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Choose service
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


// Тип услуги
// ● Адрес / местоположение
// ● Описание помещения (количество маленьких/больших комнат, количество санузлов)
// ● День (дни)
// ● Ожидаемое время начала уборки
// ● Планируемая регулярность уборки (только один раз, каждую неделю, каждые две недели,
// каждый месяц). Если уборка рекуррентная, также должна быть указана продолжительность
// сделки.
// ● Название компании● Цена (см. «правила расчета цены уборки» внизу)
// ● Время уборки (см. «правила расчета времени уборки» внизу)
// ● Статус (активная / неактивная)

// Данные можно фильтровать/группировать по типу услуги, адресу, названию компании. Также данные
// можно сортировать по цене, времени уборки, дате.