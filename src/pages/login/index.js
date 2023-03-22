import { connect } from 'react-redux';
import Login from './login';
import { setUserToken } from '../../actions/login';

const mapStateToProps = () => ({});

const mapDispatchToProps = { setUserToken };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
