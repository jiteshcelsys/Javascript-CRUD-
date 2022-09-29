
import { Paper, Grid, Avatar, Typography, TextField, Box } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import axios from 'axios'
import { PropagateLoader } from 'react-spinners'
import { color } from '@mui/system';



function Project() {
  const [open, setOpen] = useState(false);
  let [user, updateUser] = useState("")
  let [email, updateEmail] = useState("")
  let [date, updateDate] = useState("")
  let [gender, updateGender] = useState("")
  let [qualification, updateQualification] = useState("")
  let [profile, updateProfile] = useState("")
  let [data, setData] = useState([]);
  let [edittted,setEditted]=useState(false)

  let a = 'http://localhost:5000/posts'

  let [recount, setCount] = useState(false)
  let [recount1, setCount1] = useState(false)
  let [delLoader, setLoader] = useState();

  useEffect(() => {
    console.log("useEffect")
    fetchData();

    // setCount(!recount)
  }, [recount])

  const handleClickOpen = (e) => {
    setOpen(true);
  };
  //cancel button
  const CloseUp = () => {
    setOpen(false)
  }

  //submit button
  const handleClose = () => {
    console.log('handle close is clicked')
    if (jsonServer()) {
      console.log('handle close2')
      let payload = { user, email, date, gender, qualification, profile }
      axios.post(a, payload).then(res => {
        setCount(!recount);
      }).catch(err => console.log(err))
      
      setOpen(false);
    }
    // else if(jsonServer()&&recount1){
    //   let payload = { user, email, date, gender, qualification, profile }
    //     axios.put(a, payload).then(res => {
    //       setCount1(false);
    //     }).catch(err => console.log(err));
    //     setOpen(false);

    //  }
    // return true;
    updateUser("")
    updateEmail("")
    updateDate("");
    updateGender("");
    updateGender("");
    
  };

  let jsonServer = () => {
    let regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexUser = /^[A-Za-z]+$/;
    for(let i of data)
    {
     if(email===(i.email))
     { alert("email is available")
      return false;
     } 
     

    }
    if (user == "" || email == "" || date == "" || profile === "" || qualification === "" || gender === "") {
      alert('all the fiels are mandatory')
      return false;
    }
    if (!regxEmail.test(email)) {
      alert('incorectly Written Email')
      return false;
    }
    if (!regexUser.test(user)) {
      alert('incorrectly written username')
      return false;
    }
    return true;
  }
  let fetchData = async () => {
    await axios.get(a).then((response) => {
      console.log("fetch data")
      setData(response.data)
      console.log(response.data)
    })
  }

  let delFunc = async (e) => {
    let d = e.target.id;
    console.log("delete is clicked with id"+" "+d)
    await axios.delete(a + "/" + d).then(() => {
      setCount(!recount)
    })
  } 
  function editFunc(e)
  {
    // setEditted(!edittted)
    let d=e.target.id;
    console.log("edit is clicked with id"+" "+d)
    // setOpen(true);
    // if(edittted)
    // {
    //   axios.get(a + "/" + d).then((res) => {
    //           console.log(res.data.user)
    //           updateUser(res.data.user);
    //           updateDate(res.data.date);
    //           updateGender(res.data.gender);
    //           updateProfile(res.data.profile);
    //           updateQualification(res.data.qualification)
    //           updateEmail(res.data.email)
    //         })
    // }
    // axios.delete(a+"/"+d).then(()=>{
    //   setCount(!recount)
    // })
  }

  // function editFunc(e) {
  //   setCount1(!recount1);
  //   let d = e.target.id;
  //   setOpen(true);
  //   if (recount1) {
  //     axios.get(a + "/" + d).then((res) => {
  //       console.log(res.data.user)
  //       updateUser(res.data.user);
  //       updateDate(res.data.date);
  //       updateGender(res.data.gender);
  //       updateProfile(res.data.profile);
  //       updateQualification(res.data.qualification)
  //       updateEmail(res.data.email)
  //     })
  //   }
  //   axios.delete(a + "/" + d).then(() => {
  //     setCount(!recount)
  //   })
  // }
  // function UpdateUserFunc(e) {
  //   updateUser(e.target.value)
  // }
  // function updateGenderMale(e) {
  //   console.log(e.target.name)
  //   updateGender(e.target.name)
  // }
  // function updateGenderFemale(e)
  // {
  //   console.log(e.target.name);
  //   updateGender(e.target.name)
  // }


  const radio = { padding: "3px" };
  const delstyle = { display: "flex", justifyContent: "center", backgroundColor: "gray" }
  const addEmp = { position: "absolute", top: "70%", left: "50%", transform: "translate(-50%,-50%)" }
  const boxStyle = { margin: "5px", border: "1px solid red" }
  const buttonCenter = { padding: '15px', fontSize: "20px", color: "black", backgroundColor: "Gray", marginLeft: "570px", marginTop: "20px" }
  const boldStyle = { fontSize: "30px", backgroundColor: "LightGray" }
  return (
    <>

      <Box style={boxStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='right' style={boldStyle}>ID</TableCell>
                  <TableCell align="right" style={boldStyle}>UserName</TableCell>
                  <TableCell align="right" style={boldStyle}>Email</TableCell>
                  <TableCell align="right" style={boldStyle}>Date</TableCell>
                  <TableCell alin="riht" style={boldStyle}>Gender</TableCell>
                  <TableCell align="right" style={boldStyle}>Qualification</TableCell>
                  <TableCell align="right" style={boldStyle}>Profile photo</TableCell>
                  <TableCell align='right' style={boldStyle}> operation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {data.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.user}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.qualification}</TableCell>
                    <TableCell align="right">{row.profile}</TableCell>
                    <TableCell align="right"><button id={row.id}  onClick={editFunc} >edit</button>
                      <button id={row.id} onClick={delFunc}>Delete</button></TableCell>
                  </TableRow>
                ))}


              </TableBody>
            </Table>

          </Grid>

        </Grid>

      </Box>
      <div>
        <Button variant="outlined" onClick={handleClickOpen} style={buttonCenter} >

          Add Employee
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Registration</DialogTitle>
          <DialogContent>
            <DialogContentText>
              please fill all the details
            </DialogContentText>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <form>
                    <FormControl>
                      <TextField fullWidth label='Name' style={{ padding: "10px" }} name="user" onChange={(e) => { updateUser(e.target.value) }} value={user} />
                      <TextField fullWidth label='Email' style={{ padding: "10px" }} name="email" onChange={(e) => updateEmail(e.target.value)} value={email} />
                      <TextField fullWidth label='date' style={{ padding: "10px" }} name="date" onChange={(e) => { updateDate(e.target.value) }} type="date" value={date} />

                      <FormLabel style={{ fontSize: 16 }} name="gender" >Gender</FormLabel>
                      <RadioGroup style={{ display: "initial" }} value={gender} onChange={(e)=>{updateGender(e.target.value)}} >
                        <Radio value="male"  label="Female" style={radio} control={<Radio/>} />
                        <Radio value="female"  label="Male" style={radio} control={<Radio/>} />
                      </RadioGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel style={{ fontSize: 16 }} name="qualification">Qualification</FormLabel>

                      <RadioGroup name="radio-buttons-group" sx={{ my: 1 }} style={{ display: "initial" }}>
                        <Radio value="10" label="10" style={radio} onChange={(e) => { updateQualification(e.target.value) }} />
                        <Radio value="12" label="12" style={radio} onChange={(e) => { updateQualification(e.target.value) }} />
                        <Radio value="graduation" label="graduation" style={radio} onChange={(e) => { updateQualification(e.target.value) }} />
                        <Radio value="master" label="master" style={radio} onChange={(e) => { updateQualification(e.target.value) }} />
                        <Radio value="ph.d" label="ph.d" style={radio} onChange={(e) => { updateQualification(e.target.value) }} />
                      </RadioGroup>
                    </FormControl>
                    <TextField fullWidth type="file" style={{ padding: "10px" }} accept="image/png, image/jpeg" name='profile' onChange={(e) => { updateProfile(e.target.value) }} />
                  </form>

                </Grid>

              </Grid>

            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={CloseUp}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>





    </>
  )
}

export default Project
