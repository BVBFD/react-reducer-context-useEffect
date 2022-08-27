import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Span = styled.span`
  font-size: 36px;
`;

const P = styled.p``;

const Button = styled.button`
  padding: 12px;
  margin-top: 18px;
  font-size: 24px;
`;

const Input = styled.input`
  padding: 12px;
  margin-top: 18px;
  font-size: 24px;
`;

const Post = () => {
  // 1. useEffect and dom rendering orders explained!!
  // const [number, setNumber] = useState<number>(0);
  // const [name, setName] = useState<string>();

  // useEffect(() => {
  //   console.count('useEffect run!');
  //   document.title = `You clicked ${number} times`;
  // }, [number]);

  // console.count('Component Rendered!');
  // useEffect and dom rendering orders explained!!

  // 2. useEffect about array, object non-premitive type non-changeable attributes relating re-rendering
  // const [name, setName] = useState<string>('');
  // const [state, setState] = useState({
  //   name: '',
  //   selected: false,
  // });

  // const user = useMemo(
  //   () => ({
  //     name: state.name,
  //     selected: state.selected,
  //   }),
  //   [state.name, state.selected]
  // );
  // // 아래와 같은 문제점 때문에 useMemo를 써주는 것임.

  // useEffect(() => {
  //   console.log('The state has changed, useEffect runs!');
  // }, [user]);

  // // useEffect(() => {
  // //   console.log('The state has changed, useEffect runs!');
  // // }, [state.name, state.selected]);
  // // 아래와 같은 문제점 때문에 객체 내부 값을 세밀하게 설정하여 재렌더링 방지

  // // deps 배열안에 그냥 state 를 썼을 경우 버튼 클릭시 내용 값이 달라지지 않음에도 불구하고
  // // 재렌더링 되는 현상.. 왜냐하면 object, array는 none primitive type이며 클릭하고
  // // 값이 변동대는 것이 없다하더라도 이미 메모리상 참조값이 다르기 때문에 다른 값일수 밖에 없음.
  // // 그래서 내용 값이 변동이 되는 것이 없어도 재렌더링 되는 것임..

  // const handleAdd = () => {
  //   setState((prev) => ({ ...prev, name }));
  // };

  // const handleSelect = () => {
  //   setState((prev) => ({ ...prev, selected: true }));
  // };

  // const handleReset = () => {
  //   setState({
  //     name: '',
  //     selected: false,
  //   });
  // };
  // 2. useEffect about array, object non-premitive type non-changeable attributes relating re-rendering

  // 3. useEffect Timer
  // const [number, setNumber] = useState<number>(0);

  // useEffect(() => {
  //   console.log('effect');
  //   const interval = setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  // 3. useEffect Timer

  // 4. fetching datas 1 case
  // type PostsType = {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   body: string;
  // };

  // const [posts, setPosts] = useState<Array<PostsType>>();

  // useEffect(() => {
  //   let canceled = false;
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!canceled) {
  //         console.log('posts are ready, updating state!');
  //         setPosts(data);
  //         console.log(data);
  //       }
  //     });

  //   return () => {
  //     canceled = true;
  //   };
  // }, []);
  // 4. fetching datas 1 case

  // 5. fetching datas 2 case
  const [user, setUser] = useState<any>({});
  const id = useLocation().pathname.split('/')[2];

  useEffect(() => {
    console.log('useEffect mounts!');

    // let unsubscribed = false;
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (!unsubscribed) {
    //       setUser(data);
    //     }
    //   });
    // return () => {
    //   console.log('cancelled');
    //   unsubscribed = true;
    // };

    // fetch api 사용시
    // const controller = new AbortController();
    // const signal = controller.signal;
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data);
    //   })
    //   .catch((err) => {
    //     if (err.name === 'AbortError') {
    //       console.log('cancelled');
    //     } else {
    //       // todo: handle error
    //       console.log(err);
    //     }
    //   });
    // return () => {
    //   controller.abort();
    // };

    // axios api 사용시
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('cancelled');
        } else {
          // todo: handle error
          console.log(err);
        }
      });
    return () => {
      console.log('useEffect unmounts!');
      cancelToken.cancel();
    };
  }, [id]);
  console.log(user);
  // 5. fetching datas 2 case

  return (
    // 1. useEffect and dom rendering orders explained!!
    // useEffect and dom rendering orders explained!!
    // <Container>
    //   <Span>You clicked {number} times</Span>
    //   <Input onChange={(e) => setName(e.target.value)} />
    //   <Button onClick={() => setNumber((prev: number) => prev + 1)}>
    //     Increase
    //   </Button>
    //   <Button onClick={() => setNumber(0)}>Reset</Button>
    // </Container>
    // useEffect and dom rendering orders explained!!
    // 1. useEffect and dom rendering orders explained!!

    // 2. useEffect about array, object non-premitive type non-changeable attributes relating re-rendering
    // <Container>
    //   <Input type='text' onChange={(e) => setName(e.target.value)} />
    //   <Button onClick={handleAdd}>Add Name</Button>
    //   <Button onClick={handleSelect}>Select</Button>
    //   <Button onClick={handleReset}>Reset</Button>
    //   <Span>{`{
    //     name:${state.name},
    //     selected:${state.selected.toString()}
    //   }`}</Span>
    // </Container>
    // 2. useEffect about array, object non-premitive type non-changeable attributes relating re-rendering

    // 3. useEffect Timer
    // <Container>
    //   <Span>{number} cleaning</Span>
    // </Container>
    // 3. useEffect Timer

    // 4. fetching datas 1 case
    // <Container>
    //   <Link
    //     style={{
    //       position: 'absolute',
    //       top: '24px',
    //       left: '24px',
    //       fontSize: '24px',
    //     }}
    //     to={'/'}
    //   >
    //     Go to Form
    //   </Link>
    //   {posts?.map((p: any) => (
    //     <P key={p.id}>{p.title}</P>
    //   ))}
    // </Container>
    // 4. fetching datas 1 case

    // 5. fetching datas 2 case
    <Container>
      <P>Name: {user.name}</P>
      <P>Username: {user.username}</P>
      <P>Email: {user.email}</P>
      <Link to='/users/1'>Fetch User 1</Link>
      <Link to='/users/2'>Fetch User 2</Link>
      <Link to='/users/3'>Fetch User 3</Link>
    </Container>
    // 5. fetching datas 2 case
  );
};

export default Post;
