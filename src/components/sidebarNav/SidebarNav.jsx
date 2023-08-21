"use client";

import React, { useState } from "react";
import UserMenu from "../userMenu/UserMenu";
import Image from "next/image";
import Budget from "./Budget";

const SidebarNav = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <>
      <div id="app_sidebar" className="flex flex-col bg-white rounded-2xl">
        <div
          className="px-4 py-3 d-flex flex-stack px-lg-6 py-lg-8"
          id="kt_app_sidebar_logo"
        >
          {/* <!--begin::Logo image--> */}
          <a href="../../demo23/dist/index.html">
            <Image
              width={150}
              height={150}
              alt="Logo"
              src="demo23.svg"
              className="h-20px h-lg-25px theme-light-show"
            />
          </a>
          {/* <!--end::Logo image--> */}

          {/* <!--begin::User menu--> */}
          <div className="relative ms-3">
            {/* <!--begin::Menu wrapper--> */}

            <button
              className="relative cursor-pointer symbol symbol-circle symbol-40px"
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <img src="300-2.jpg" alt="user" />
              <div className="absolute rounded-circle bg-success start-100 top-100 h-8px w-8px ms-n3 mt-n3"></div>
            </button>

            {/* <!--end::Menu wrapper--> */}
            {showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}
          </div>
          {/* <!--end::User menu--> */}
        </div>

        <div
          className="px-4 py-4 flex-column-fluid px-lg-8"
          id="kt_app_sidebar_nav"
        >
          <div
            id="kt_app_sidebar_nav_wrapper"
            className="d-flex flex-column hover-scroll-y pe-4 me-n4"
          >
            {/* <div className="mb-6 d-flex align-items-center flex-column w-100">
              <div className="mt-auto mb-3 text-gray-800 d-flex justify-content-between fw-bolder fs-6 w-100">
                <span>Your Goal</span>
              </div>
              <div
                className="mb-2 rounded w-100 bg-light-primary"
                style={{ height: "24px" }}
              >
                <div
                  className="rounded bg-primary"
                  role="progressbar"
                  style={{ height: "24px", width: "37%" }}
                ></div>
              </div>
              <div className="mt-auto fw-semibold fs-7 text-primary w-100">
                <span>reached 37% of your target</span>
              </div>
            </div> */}

            {/* <!--begin::Stats--> */}
            <Budget />
            {/* <!--end::Stats--> */}

            {/* <!--begin::Links--> */}
            <div className="mb-6">
              {/* <!--begin::Row--> */}
              <div
                className="row row-cols-2"
                // data-kt-buttons="true"
                // data-kt-buttons-target="[data-kt-button]"
              >
                {/* <!--begin::Col--> */}
                <div className="mb-4 col">
                  {/* <!--begin::Link--> */}
                  <a
                    href="/roles"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    {/* <!--begin::Icon--> */}
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    {/* <!--end::Icon--> */}
                    {/* <!--begin::Label--> */}
                    <span className="fs-7 fw-bold">نقش‌ها</span>
                    {/* <!--end::Label--> */}
                  </a>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="mb-4 col">
                  {/* <!--begin::Link--> */}
                  <a
                    href="/categories"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    {/* <!--begin::Icon--> */}
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    {/* <!--end::Icon--> */}
                    {/* <!--begin::Label--> */}
                    <span className="fs-7 fw-bold">دسته‌بندی‌ها</span>
                    {/* <!--end::Label--> */}
                  </a>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Col--> */}
                {/* <!--begin::Col--> */}
                <div className="mb-4 col">
                  {/* <!--begin::Link--> */}
                  <a
                    href="/products"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    {/* <!--begin::Icon--> */}
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    {/* <!--end::Icon--> */}
                    {/* <!--begin::Label--> */}
                    <span className="fs-7 fw-bold">محصولات</span>
                    {/* <!--end::Label--> */}
                  </a>
                  {/* <!--end::Link--> */}
                </div>
                {/* <!--end::Col--> */}
              </div>
              {/* <!--end::Row--> */}
            </div>
            {/* <!--end::Links--> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
