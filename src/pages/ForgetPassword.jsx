import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'




const ForgetPassword = () => {

    return (
        <>
            <Box width={"100%"} height="60px" bgcolor={"#3370FD"}>
                <Typography pl={5} pt={2} variant="subtitle2" sx={{ color: "#ffffff" }}>Organaise</Typography>
            </Box>
            <Box width={"100%"} height="100%" bgcolor={"#3370FD"}>
                <Grid container id="heading_service">
                    <Grid item xs={12} display="flex" justifyContent={"center"}>
                        <Typography variant="h6" sx={{ textAlign: "center", color: "#ffffff" }}
                            width={{ xs: "70%", sm: "60", md: "40%", lg: "45%" }}>
                            Reset your password
                        </Typography>
                    </Grid>
                    <Grid item mt={2} xs={12} display="flex" justifyContent={"center"}>
                        <Typography variant="body2" color="#ffffff">Enter your email and we’ll send you a link to reset your password </Typography>
                    </Grid>
                </Grid>
                <Grid container mt={3} id="service_form" height={"460px"} display="flex" justifyContent={"center"}>
                    <Grid container item xs={12} sm={8} md={4} width="100%">
                        <Grid item my={3} px={5} width={"100%"}>
                            <Typography variant="body2" mb={.5} sx={{ color: "#ffffff" }} >Email</Typography>
                            <TextField
                                size='small'

                                sx={{ width: "100%", backgroundColor: "#ffffff", borderRadius: "0px" }}
                                id="Email_address"
                            //label="Email Address"
                            //value={}
                            //onChange={}

                            />
                            
                            <Button
                                variant='contained'
                                size='small'
                                sx={{ width: "100%", marginTop: "40px" }}
                            >
                                Reset Password
                            </Button>

                            <Box mt={5} sx={{ display: "flex", justifyContent: "center" }} >
                                <Link to="/login" style={{
                                    color: "#fff", fontFamily: "Nunito",
                                    fontSize: "14px", textAlign: "center"
                                }}>Cancel</Link>
                            </Box>
                            <Box mt={3} sx={{ display: "flex", justifyContent: "center" }} >
                                <Link to="/" style={{ color: "#fff", fontFamily: "Nunito", fontSize: "12px", textAlign: "center" }}>Don't have a Organaise account?  </Link>
                            </Box>
                            <Box mt={2} sx={{ display: "flex", justifyContent: "center" }} >
                                <Link to="/" style={{
                                    color: "#fff", fontFamily: "Nunito", fontSize: "15px",
                                    textAlign: "center"
                                }}>Sign Up</Link>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default ForgetPassword