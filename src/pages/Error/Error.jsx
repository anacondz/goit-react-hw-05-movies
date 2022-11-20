import { ListItem , InfoLink , Wrapper } from "./Error.styled";
const NotFound = () => {
  return (
    <Wrapper>
      <h1>{'Seems like something went wrong.'}</h1>
      <ul>
        <ListItem>
          <InfoLink to="/">Home</InfoLink>
        </ListItem>

        <ListItem>
          <InfoLink to="/movies">Movies</InfoLink>{' '}
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default NotFound;