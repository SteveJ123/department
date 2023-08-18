import * as React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

export default function DepartmentList() {

    const [checked, setChecked] = React.useState([true, false]);
    const [checked2, setChecked2] = React.useState([true, false, false]);
    const [childrenVisible, setChildrenVisible] = React.useState(true);
    const [children2Visible, setChildren2Visible] = React.useState(true);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2([event.target.checked, event.target.checked, event.target.checked]);
      };

      const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event5", event.target.checked)
        setChecked2([event.target.checked, checked2[1], checked2[2]]);
      };
      const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event6", event.target.checked)
        setChecked2([checked2[0], event.target.checked, checked2[2]]);
      };
      const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("event7", event.target.checked)
        setChecked2([checked2[0], checked2[1], event.target.checked]);
      };

      const handleToggle1 = ()=>{
        setChildrenVisible(!childrenVisible)
      }

      const handleToggle2 = ()=>{
        setChildren2Visible(!children2Visible)
      }
  
    const children = (
      <Box style={{marginLeft: "60px"}} sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>{childrenVisible && <>
        <FormControlLabel
        label="support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="customer_succes"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      </>
      }
        
      </Box>
    );

    const children2 = (
        <Box style={{marginLeft: "60px"}} sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>{children2Visible && <>
          <FormControlLabel
            label="graphic_design"
            control={<Checkbox checked={checked2[0]} onChange={handleChange5} />}
          />
          <FormControlLabel
            label="product_design"
            control={<Checkbox checked={checked2[1]} onChange={handleChange6} />}
          />
            <FormControlLabel
            label="web_design"
            control={<Checkbox checked={checked2[2]} onChange={handleChange7} />}
          />
        </>}
        
        </Box>
      );
  
  return (
    <div>
        <h1>Department</h1>
        <div style={{float: "left", padding: "2px", fontSize: "25px", marginRight: "10px"}} onClick={handleToggle1}>{childrenVisible ? "-" : "+"}</div>
         <FormControlLabel
        label="customer_service"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}

        <div style={{float: "left", padding: "2px", fontSize: "25px", marginRight: "10px"}} onClick={handleToggle2}>{children2Visible ? "-" : "+"}</div> 
      <FormControlLabel
        label="design"
        control={
          <Checkbox
            checked={checked2[0] && checked2[1] && checked2[2]}
            indeterminate={checked2[0] !== checked2[1] || checked2[0] !== checked2[2] || checked2[1] !== checked2[2] }
            onChange={handleChange4}
          />
        }
      />
      {children2}
    </div>
  )
}
