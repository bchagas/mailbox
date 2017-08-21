import Moment from 'moment';

class Application {
  formatDate(date) {
    return Moment(date * 1000).format('ddd DD MMMM, H:mm');
  }
}

export default new Application();