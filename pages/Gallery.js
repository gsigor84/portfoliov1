import React from 'react'
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    width: 4,
    height: 3,
    id:1
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    width: 4,
    height: 3,
    id:2
  },
  {
    src: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80',
    width: 1,
    height: 1,
    id:3
  }


];



const BasicRows = () => <Gallery photos={photos} />;

export default BasicRows