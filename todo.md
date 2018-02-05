Studentlist.js: 
componentWillMount() {
  const batchNum = this.props.batchNum
  this.props.fetchStudentsByBatchId(batchNum)
  this.props.fetch(batchNum)
  // this.props.dispatch(fetchBatches())
  // this.props.fetchStudentsByBatchId(batchNum) // see mapDispatchToProps below
}
