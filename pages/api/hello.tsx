import axios from 'axios'


axios.get('http://localhost:3001/todos')
.then(res => {
  return res.data;
})