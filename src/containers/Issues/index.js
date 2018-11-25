import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './Issues.map';
import Issues from './Issues';

export default connect(mapStateToProps, mapDispatchToProps)(Issues);