import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrending, getOriginals, getAction, getRomance, getHorror, getThriller, getAnimation } from '../../redux/movies/movie.utils';
import Header from '../../component/header/header.component';
import NavBar from '../../component/nav-bar/nav-bar.component';
import ListOverview from '../../component/listoverview/listOverview.component';


class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch(getTrending());
        this.props.dispatch(getOriginals());
        this.props.dispatch(getAction());
        this.props.dispatch(getRomance());
        this.props.dispatch(getHorror());
        this.props.dispatch(getThriller());
        this.props.dispatch(getAnimation());
      }
    

      render() {
        const { 
          trending,
          netflixOriginals, 
          action,
          horror,
          thriller,
          romance,
          animation } = this.props;
          
        return (
          <div className='app'>
            <Header trending={ trending }/>
            <ListOverview movieList={ netflixOriginals } listName={'NetFlix Originals'}/>
            <ListOverview movieList={ action } listName={'Action'}/>
            <ListOverview movieList={ romance } listName={'Romance'}/>
            <ListOverview movieList={ thriller } listName={'Thriller'}/>
            <ListOverview movieList={ horror} listName={'Horror'}/>
            <ListOverview movieList={ animation } listName={'Animation'}/>
            
          </div>
        );
      }

    }


    const mapStateToProps = (state) => ({
        trending: state.movie.trending,
        netflixOriginals: state.movie.netflixOriginals,
        action: state.movie.action,
        romance: state.movie.romance,
        horror: state.movie.horror,
        thriller: state.movie.thriller,
        animation: state.movie.animation,
      });
      
    export default connect(mapStateToProps)(HomePage);