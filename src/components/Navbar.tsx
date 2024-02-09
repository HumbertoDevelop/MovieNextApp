'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { NetflixLogo } from "@/components/NetflixLogo";
import { useState } from "react";
import { SearchIcon } from "./SearchIcon";


export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Account",
    "Home",
    "Series",
    "Movies",
    "Up Coming",
    "Top Rated",
    "My List",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered className="bg-transparent fixed top-0 left-0 right-0 border-none animation-scrollbar" isBlurred={false} maxWidth="full">
    <NavbarContent justify="start">
      <NavbarBrand className="mr-4">
        <NetflixLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 justify-start">
        <NavbarItem isActive>
          <Link color="foreground" href="#" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="secondary" className="text-white">
            Series
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Movies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Up Coming
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Top Rated
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            My List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarContent>

    <NavbarContent as="div" className="items-center" justify="end">
      {/* <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
      /> */}
      <Dropdown placement="bottom-end"  className="bg-zinc-900">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" >
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>
  );
}
