import React from 'react';
import axios from 'axios'

const Index = ({ list, error }) => {
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <ul>
        {list.map(list => (
          <li key={list.list_index}>
              {list.list_name}
              <br></br>
              {list.list_status}
              <br></br>
              {list.list_dday}
              <br></br>
              {list.list_memo}
          </li>
        ))}
      </ul>
    );
  };

Index.getInitialProps = async function() {
        // const res = await axios.get('http://localhost:3001/todos')
        // const data = await res.data[0];

        // console.log(`Show: ${data[0].list_index}`);

        // return {
        //     data: data,
        // }
        try {
            const res = await axios.get('http://localhost:3001/todos');
            const list = res.data[0];
            return { list };
          } catch (error) {
            return { error };
          }
    };

export default Index

