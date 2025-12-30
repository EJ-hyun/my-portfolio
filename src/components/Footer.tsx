import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-black flex items-center justify-between h-[80px] px-5 md:px-[50px] shrink-0">
      <p className="text-sm font-light md:text-base text-white">
        Copyright © 2025 All rights Reserved
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/EJ-hyun"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub 저장소 바로가기"
        >
          <FaGithub size={32} color="white" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
