import React from "react";
import { CircularProgress } from "@material-ui/core";

const ShowLoading = () => {
   return <CircularProgress size={60}
                            left={-20} top={10}
                            style={{marginLeft: '50%'}}
                            color="secondary"
   />
};

export default ShowLoading;