import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

class ClientBookingCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
        <Grid container spacing={8} className={classes.container}>
          <Grid item xs={12} sm={12}>
            <CardHeader
              title="Company name"
              subheader="cleaning type"
            />
            <CardContent className={classes.content}>
              Booking details
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={12}>
            <CardActions>
              <Button size="small" color="primary">
                Cancel
              </Button>
              <Button size="small" variant="contained" color="secondary">
                Details
              </Button>
            </CardActions>
          </Grid>
        </Grid>     
      </Card>
    </div>
    );
  }
}

ClientBookingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientBookingCard);


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