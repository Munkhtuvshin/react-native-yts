import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {NavigationActions} from 'react-navigation'
import MovieDetail from '../component/MovieDetail'
import { getMovies } from '../MovieActions'

export default connect(
   state => ({
   	  //orders: toJS(state.profile.getIn(['active_orders'])),
   	  //movies: state.movie.get('movies').toJS(),
   }),
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       getMovies: bindActionCreators(getMovies, dispatch),
     }
   }
)(MovieDetail)
