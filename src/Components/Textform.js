import React, {useState} from 'react'
//material ui imported
import { Typography } from '@mui/material';
//importing button from material ui
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Textform(props) {

  const Uppercase =()=>{
    console.log('Pressed the Changer');
    //using hooks
    let newVlaue = text.toUpperCase();
    settext(newVlaue);
  }

  const Lowercase =()=>{
    console.log('Pressed the Changer');
    //using hooks
    let newVlaue = text.toLowerCase();
    settext(newVlaue);
  }
  const Clear =()=>{
    console.log('Pressed the Changer');
    //using hooks
    let newVlaue = ''
    settext(newVlaue);
  }

  //to show typing items
  const Changers =(event)=>{
    settext(event.target.value);
    console.log('On Change')
  }

  const [text, settext] = useState('Enter Text Here');
  //text = "new text"; wrong way to change the state
  //settext("new text"); correct way to change the state
  return (
    <>
    <div className='bg-dark p-3 rounded'>
      {/* material ui */}
      <Typography variant='h4' className='text-light'>{props.heading}</Typography>
      {/* <Typography variant='h4' component='h1' gutterBottom className='text-light'>{props.heading}</Typography> */}
      {/* <Typography variant='subtitle1' className='text-light'>{props.heading}</Typography>
      <Typography variant='subtitle2' className='text-light'>{props.heading}</Typography> */}
        {/* <h2 className='text-light'>{props.heading}</h2> */}
        <hr className='text-light' />
        <div className='mb-3'>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className='form-control' value={text} onChange={Changers} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>


    {/* stack used for spacing and button */}
    <Stack spacing={2} display='block' direction='row'>

      {/* for grouping button styles  also can give orientation color and varients*/}
      <ButtonGroup variant='contained'>
        {/* <button className='btn btn-primary mx-2 mt-1' onClick={Uppercase}>Convert to Uppercase</button> */}
        {/* <button className='btn btn-success mx-2 mt-1' onClick={Lowercase}>Convert to Lowercase</button>
        <button className='btn btn-danger mx-2 mt-1' onClick={Clear}>Clear</button> */}
  
        {/* using material ui button */}
        {/* <Button variant='text' onClick={Uppercase}>Convert to Uppercase</Button> */}
        <Button size='small' className='' onClick={Uppercase}>Convert to Uppercase</Button>
        {/* <Button variant='outlined' onClick={Uppercase}>Convert to Uppercase</Button> */}
        <Button size='small' variant='contained' color='success' onClick={Lowercase}>Convert to Lowercase</Button>
        {/* <Button size='large' variant='contained' color='error' startIcon={<DeleteIcon/>} onClick={Clear}></Button>    */}
  
      </ButtonGroup>
      <IconButton aria-label='delete' onClick={Clear} color='error'>
          <DeleteIcon/>
        </IconButton>
    </Stack>



    </div>
    <div className='container text-light bg-dark rounded mt-3 p-3'>
      <h2>Text <b className='text-success'>Summary</b></h2>
      <hr />
      <p><span className='text-success'>{text.split(" ").length}</span> words and <span className='text-success'>{text.length}</span> characters</p>
      <p>{0.008 * text.split(" ").length} Minutes taken to read</p>
    </div>
    <div className='container preview bg-dark text-light rounded mt-3 mb-3 p-3'>
      <h2>Preview</h2>
      <hr />
      {/* <Typography variant='body1'>{text}</Typography> */}
      <Typography variant='body2'>{text}</Typography>
      {/* <p>{text}</p> */}
    </div>
    </>
  )
}
