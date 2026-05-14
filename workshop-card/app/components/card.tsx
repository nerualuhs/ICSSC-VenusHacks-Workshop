import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 320, minHeight: 510, display: 'flex', flexDirection: 'column', padding: 2 }} >
      <CardContent>
        <Stack spacing="20px">
        <Box
          className="flex items-center gap-4">
              <StarIcon/>
            <Typography 
              variant="h1" 
              sx={{ fontSize: 24 }}>
                Header Text
            </Typography>
          </Box>
        
        <Box
          component="img"
          src="IloveICSSC.png"
          className="h-[256px] w-[256px] border border-gray-500 object-cover"
        />

        <TextField/>

        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}