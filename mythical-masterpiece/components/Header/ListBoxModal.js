import Link from 'next/link'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box} from "@mui/material";


export default function ListBoxModal(props) {
    return (
        <List
            sx={{
                width: '100%',
                height: '45%',
                maxWidth: 202.63,
                maxHeight: '60%',
                '& ul': {padding: 0},
                direction: "rtl",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                paddingRight: 4
            }}
            subheader={<li/>}
        >
            {/* {props.DataSubtitle.map((sectionId) => ( */}

            <li key={`section-${props.title}`}>
                <ul>
                    <ListSubheader sx={{background: 'transparent'}}>{props.title}<ArrowBackIosNewIcon
                        sx={{fontSize: 10}}/></ListSubheader>
                    {props.subTitle.map((item) => (
                        <ListItem sx={{cursor: "pointer"}} key={`${item}` }>
                            <Link href={"/search"}>
                                <Box sx={{height: 10}}>
                                    <ListItemText
                                        sx={{textAlign: 'right'}}
                                        primary={`${item}`}
                                    />
                                </Box>
                            </Link>
                        </ListItem>
                    ))}
                </ul>
            </li>
            {/* ))} */}
        </List>
    );
}