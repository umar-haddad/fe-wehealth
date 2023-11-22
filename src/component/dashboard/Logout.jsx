import { Popconfirm } from "antd";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Logout = ({ children }) => {
   return (
      <Popconfirm
         okText="Logout"
         cancelText="Batal"
         title="Yakin ingin keluar ?"
         onConfirm={
            console.log('logout')
         }
      >
         <Link className="link-logout">{children}</Link>
      </Popconfirm>
   );
};

Logout.propTypes = {
   children: propTypes.string.isRequired,
};

export default Logout;
