import Table from "components/Table"
import { IMsg } from 'typesreact'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';

const ejemplo: IMsg[] = [
    {
        _id: "12",
        text: "dsgdfjjjgdfhdfhfgbcxbdara reyer gery ew tt ew et4wtert wetr tewwetwe ",
        read: true,
        email: "example@example.com",
        date: new Date(),
    },
    {
        _id: "12",
        text: "dsgdfjjjgdfhdfhfgbcxbdara reyer gery ew tt ew et4wtert wetr tewwetwe ",
        read: true,
        email: "example@example.com",
        date: new Date(),
    },
    {
        _id: "12",
        text: "dsgdfjjjgdfhdfhfgbcxbdara reyer gery ew tt ew et4wtert wetr tewwetwe ",
        read: true,
        email: "example@example.com",
        date: new Date(),
    },
    {
        _id: "12",
        text: "dsgdfjjjgdfhdfhfgbcxbdara reyer gery ew tt ew et4wtert wetr tewwetwe ",
        read: true,
        email: "example@example.com",
        date: new Date(),
    },
    {
        _id: "12",
        text: "dsgdfjjjgdfhdfhfgbcxbdara reyer gery ew tt ew et4wtert wetr tewwetwe ",
        read: true,
        email: "example@example.com",
        date: new Date(),
    }
];
const Messages = () => {
    return (
        <div>
            <Table>
                <>
                    {ejemplo.map((values: IMsg) => (
                        <tr key={values._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" defaultChecked={values.read} />
                                </label>
                            </th>
                            <td style={{ maxWidth: "220px" }}>
                                <div className="flex items-center space-x-3" >
                                    <div>
                                        <div className="font-bold" >
                                            {values.email}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {values.text}
                            </td>
                            <th>
                                12 / AGO / 2021
                            </th>
                            <th>
                                <Grid spacing={2}>
                                    <IconButton color="inherit">
                                        <DeleteIcon color="secondary" />
                                    </IconButton>
                                    <IconButton color="inherit">
                                        <ReplyIcon />
                                    </IconButton>
                                </Grid>
                            </th>
                        </tr>
                    ))}
                </>
            </Table>
        </div>
    )
}

export default Messages