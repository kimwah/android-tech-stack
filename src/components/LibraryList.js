import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
      const { libraries } = this.props;
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    renderRow(library) {
      return <ListItem library={library} />
    }
    render() {
      return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
}

export default connect((state) =>{
    return {libraries: state.libraries}
})(LibraryList);