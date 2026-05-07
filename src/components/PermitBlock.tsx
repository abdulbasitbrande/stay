import { PermitProp } from "@/types/permit";

export default function PermitBlock({
    permitNumber,
    qrcode = "/assets/images/qrcode.png",
}: PermitProp) {
    return (
        <div className="permit-block data-block">
            <h5 className="text-uppercase fw-bold">SCAN QR CODE</h5>
            <div className="permit-block-qr">
                <div className="qr-image">
                    <img src={qrcode} alt="permit qr" />
                </div>
                <div className="permit-info-box">
                    <h4 className="text-uppercase fw-bold">DLD Permit Number:</h4>
                    <h5 className="mt-2 fw-bold">{permitNumber}</h5>
                    <p className="fw-light">This property listing has been reviewed and<br />verified by Dubai Land Department</p>
                </div>
            </div>
        </div>
    );
}
