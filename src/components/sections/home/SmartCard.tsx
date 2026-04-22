import { SmartCardProps } from "@/types/smartcard";

export default function SmartCard({
  title,
  description,
  icon,
}: SmartCardProps) {
  return (
    <div className="feature-card-wrapper">
      <div className="feature-card-inner">
        {/* ICON BOX */}
        <div className="icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="426"
            height="367"
            viewBox="0 0 426 367"
            fill="none"
            id="shape-2"
            preserveAspectRatio="none"
          >
            <path
              d="M0.5 341.5V25.5C0.5 11.6929 11.6929 0.5 25.5 0.5H331.789H400.5C414.307 0.5 425.5 11.6929 425.5 25.5V301.721C425.5 309.831 418.926 316.405 410.816 316.405H328.149C312.979 316.405 298.878 324.22 290.838 337.084L285.376 345.821C277.335 358.685 263.235 366.5 248.065 366.5H25.5C11.6929 366.5 0.5 355.307 0.5 341.5Z"
              stroke="#CEDAF1"
              strokeLinecap="round"
            />
          </svg>
          <img src={icon} alt="" />
        </div>

        {/* TEXT */}
        <h5 className="feature-title text-uppercase">{title}</h5>
        <p className="feature-desc">{description}</p>
      </div>
    </div>
  );
}
