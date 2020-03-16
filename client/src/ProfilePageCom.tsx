import React from 'react'
import {Grid, Button, Checkbox, TextField, IconButton, FormControl, InputLabel, Select } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
    const ProfilePageCom: React.FC<any> = (props) => {
        return(
        	<Grid 
        		container 
        		direction="row"
        		justify="space-evenly"
        		alignItems="center"
        	>   
                <Grid item xs={6}>
        	        <Grid
                        container
                        spacing={2}
        			    direction="column"
        			    justify="space-evenly"
        			    alignItems="center"
        		    >
                    <Grid item xs={12}>
        			    <span>Username</span>
                    </Grid>
                    <Grid item xs={12}>
        			    <span>Email</span>
                    </Grid>
                    <Grid item xs={12}>
        			    <Button variant="contained" color="primary">Add billing address</Button>
                    </Grid>
                    <Grid item xs={12}>
                        Use billing address for shipping?<Checkbox value="sameAsBilling" inputProps={{ 'aria-label': 'Use billing address for shipping?'}} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">Add shipping address</Button>
                    </Grid>
                    </Grid>
        		</Grid>
                <Grid item xs={6}>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            Shopping cart
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                            >
                            <Grid item xs={5}>
                                Item Name
                            </Grid>
                            <Grid item xs={2}>
                                $1000
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="outlined" className="item-amount">
                                    <Select
                                        native
                                        inputProps={{
                                            name: 'amount',
                                            id: 'item-amount'
                                        }}
                                    >
                                        <option value="" />
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </Select>

                                </FormControl>
                            </Grid>
                            <Grid item xs={1}>

                                <IconButton arial-label="delete-item">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>                
                </Grid>
        	</Grid>
        )
        	
    }
           /*
                <Grid 
                    item xs={12}
                    direction="column"
                    justify="space-between"
                    alignItems="baseline"
                >
                    <span>Your Cart</span>

                </Grid>
                </Grid>
            </Grid>
            */
export default ProfilePageCom