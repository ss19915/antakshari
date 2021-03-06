import Timer from './TimerLogic';
import actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = ({timer, game }) => ({ timer, game });
const mapDispatchToProps = (dispatch) => ({
    startTimer: () => dispatch(actions.startTimer),
    pauseTimer: () => dispatch(actions.pauseTimer),
    updateTimer: (time) => dispatch(actions.updateTimer(time)),
    resetTimer: () => dispatch(actions.resetTimer),
    updateActiveTeam: (game) => dispatch(actions.updateActiveTeam(game)),
    incrementTeamPoint: () => dispatch(actions.incrementTeamPoint),
    decreaseLife: () => dispatch(actions.decreaseLife),
});

export default connect( mapStateToProps, mapDispatchToProps )(Timer);