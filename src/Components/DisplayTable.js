import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
const DisplayTable = () => {
  const username = useSelector((state) => state.addAttendance.username);
  const id = useSelector((state) => state.addAttendance.id);
  const yaje = useSelector((state) => state.addAttendance.yaje);
  const yarasuye = useSelector((state) => state.addAttendance.yarasuye);
  const yarasuwe = useSelector((state) => state.addAttendance.yarasuwe);
  const ararwaye = useSelector((state) => state.addAttendance.ararwaye);
  const afiteIndiMpamvu = useSelector(
    (state) => state.addAttendance.afiteIndiMpamvu
  );
  const yarafashije = useSelector((state) => state.addAttendance.yarafashije);
  const yarafashijwe = useSelector((state) => state.addAttendance.yarafashijwe);
  const yatangiyeIsabato = useSelector(
    (state) => state.addAttendance.yatangiyeIsabato
  );

  const userData = {
    InitialYaje: yaje,
    initialId: id,
    InitialUsername: username,
    InitialYarasuye: yarasuye,
    InitialYarasuwe: yarasuwe,
    InitialAfiteIndiMpamvu: afiteIndiMpamvu,
    InitialArarwaye: ararwaye,
    InitialYarafashije: yarafashije,
    InitialYarafashijwe: yarafashijwe,
    InitialYatangiyeIsabato: yatangiyeIsabato,
  };

  const displayTableForm = Object.entries(userData).map(
    ([objectType, objectValue]) => {
      return (
        <td key={objectType}>
          <input
            type="checkbox"
            value={objectValue}
            name="yaje"
            onChange={() => objectValue === true}
              />
        </td>
      );
    }
  );
  return <>{displayTableForm}</>;

}

export default DisplayTable