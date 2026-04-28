import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 310, minHeight: 470, display: 'flex', flexDirection: 'column'}}>
      <CardContent>
        <Stack spacing={3} alignItems="center">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ p: 0 }}>
              <StarIcon sx={{ color: '#800080' }} />
            </IconButton>
            <Typography variant="h5" component="div" fontWeight="bold">
              ZotGuessr
            </Typography>
          </Box>
        
        <div className="w-[200px] h-[200px]"> {/* Fixed dimensions */}
        <Image 
            width={200}
            height={200}
            src="/location.webp" 
            alt="Square Image" 
            className="object-cover" 
        />
        </div>


        <TextField id="standard-basic" label="Enter a location" variant="standard" />

        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="outlined">Submit</Button>

      </CardActions>
    </Card>
  );
}