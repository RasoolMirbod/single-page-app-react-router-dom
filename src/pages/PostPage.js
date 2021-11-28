const PostPage = (props) => {
  const id = props.match.params.id || 1; // http Req => axios.get('/blog/1')
  return (
    <div>
      <h2>Post detail - {id}</h2>
      <div>{JSON.stringify(props.match.params)}</div>
    </div>
  );
};
export default PostPage;
