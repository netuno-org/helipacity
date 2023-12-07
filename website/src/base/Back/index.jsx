
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

import "./index.less";

const { Link } = Typography;

function Back({ topButton, link }) {
    const navigate = useNavigate();
    if (topButton) {
        return (
            <div className="back--top-button">
                <div className="icon icon--back">                 
                    <Link onClick={() => navigate(-1)}>
                        <LeftOutlined />
                    </Link>
                </div>
            </div>
        );
    }
    if (link) {
        return (
            <Link onClick={() => navigate(-1)}>Voltar</Link>
        );
    }
    return null;
}

export default Back;