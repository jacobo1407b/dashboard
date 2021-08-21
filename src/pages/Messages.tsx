import { useEffect, useState } from 'react';
import { mesgPage } from 'config/titles';
import { IMsg } from 'redux/myTypes';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from 'redux/accion/actionCreators';
import { getFecha } from 'utils';
import DeleteMsg from 'Custom/DeleteMsg';
import ViewMsg from 'Custom/ViewMsg';
import EmailLogo from 'assets/email.svg';
import Table from "components/Table";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card";
import Input from 'components/Input';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';

//msgReducer

const Messages = (): JSX.Element => {

    const dispatch = useDispatch()

    const msgReducer: any = useSelector<any>(state => state.msgReducer);
    const bandejaReducer: any = useSelector<any>(state => state.bandejaReducer.bandeja)

    const [arrayMsg, setArrayMsg] = useState<IMsg[]>(msgReducer.msg);
    const [longitud, setlongitud] = useState<number>(arrayMsg.length);

    useEffect(() => {
        document.title = `${mesgPage} (${bandejaReducer}) nuevos`
    }, [bandejaReducer]);


    function responseEmail(email: string) {
        window.open(`mailto:${email}`)
    }

    function reviw(params: IMsg, i: number) {
        dispatch(openModal({
            open: true,
            title: "",
            children: <ViewMsg
                bandeja={bandejaReducer}
                params={params}
                i={i}
                arrayMsg={arrayMsg}
                setArrayMsg={setArrayMsg}
            />
        }))
    }

    function onDelete(i: number,id?: string, read?: boolean) {
        dispatch(openModal({
            open: true,
            title: "",
            children: <DeleteMsg
                bandeja={bandejaReducer}
                id={id}
                i={i}
                read={read}
                arrayMsg={arrayMsg}
                setArrayMsg={setArrayMsg}
                setlongitud={setlongitud}
            />
        }))
    }
    return (
        <div>
            {longitud === 0 ? (
                <Grid spacing={2}>
                    <Card title="Bandeja de mensajes">
                        <>
                            <div
                                style={{
                                    backgroundImage: `url(${EmailLogo})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    height: "500px",
                                }}
                            >
                                ¡No hay mensajes nuevos!
                            </div>

                        </>
                    </Card>
                </Grid>
            ) : (
                <Table compact>
                    <>
                        {arrayMsg.map((values: IMsg, i: number) => (
                            <tr key={values._id} >
                                <td>
                                    <label>
                                        <input disabled type="checkbox" className="checkbox" defaultChecked={values.read} />
                                    </label>
                                </td>
                                <td className="jacobo-over" onClick={() => reviw(values, i)}>
                                    <Input
                                        size="small"
                                        maxLength={20}
                                        value={values.email}
                                    />
                                </td>
                                <td className="jacobo-over" onClick={() => reviw(values, i)}>
                                    <Input
                                        size="small"
                                        maxLength={20}
                                        value={values.text}
                                    />
                                </td>
                                <th className="jacobo-over" onClick={() => reviw(values, i)}>
                                    {getFecha(values.date)}
                                </th>
                                <th>
                                    <Grid spacing={2}>
                                        <IconButton color="inherit" onClick={() => onDelete(i,values._id, values.read)}>
                                            <DeleteIcon color="secondary" />
                                        </IconButton>
                                        <IconButton onClick={() => responseEmail(values.email)} color="inherit">
                                            <ReplyIcon />
                                        </IconButton>
                                    </Grid>
                                </th>
                            </tr>
                        ))}
                    </>
                </Table>
            )}
        </div>
    )
}

export default Messages
