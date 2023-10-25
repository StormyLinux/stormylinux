import Image from "next/image";

import stormyLinuxLogo from "../assets/stormylinux-logo.png"

const StormyLinuxLogo = () => {
  return (
    <>
      <Image src={stormyLinuxLogo} alt="StormyLinuxLogo" width="36" height="36" />
    </>
  )
}

export { StormyLinuxLogo };
