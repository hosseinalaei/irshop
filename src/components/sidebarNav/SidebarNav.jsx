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
          <a href="/">
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

        {/* <div
          className="px-4 py-4 flex-column-fluid px-lg-8"
          id="kt_app_sidebar_nav"
        >
          <div
            id="kt_app_sidebar_nav_wrapper"
            className="d-flex flex-column hover-scroll-y pe-4 me-n4"
          >
             <div className="mb-6 d-flex align-items-center flex-column w-100">
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
            </div> 

            <Budget />
            <div className="mb-6">
              <div
                className="row row-cols-2"
                // data-kt-buttons="true"
                // data-kt-buttons-target="[data-kt-button]"
              >
                <div className="mb-4 col">
                  <a
                    href="/roles"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    <span className="fs-7 fw-bold">نقش‌ها</span>
                    
                  </a>
                </div>
                <div className="mb-4 col">
                  <a
                    href="/categories"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    <span className="fs-7 fw-bold">دسته‌بندی‌ها</span>
                    
                  </a>
                </div>
                <div className="mb-4 col">
                  <a
                    href="/products"
                    className="border-gray-200 btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    <span className="fs-7 fw-bold">محصولات</span>
                   
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="aside-menu flex-column-fluid px-4">
          <div
            class="hover-scroll-overlay-y my-5 pe-4 me-n4"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="{default: '#kt_aside_footer', lg: '#kt_header, #kt_aside_footer'}"
            data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
            data-kt-scroll-offset="{default: '5px', lg: '75px'}"
          >
            <div
              class="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6"
              id="#kt_aside_menu"
              data-kt-menu="true"
            >
              <div class="menu-item">
                <a class="menu-link" href="{{ route('admin.dashboard') }}">
                  <span class="menu-icon">
                    <i class="ki-duotone ki-element-11 fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </span>
                  <span class="menu-title">داشبورد</span>
                </a>
              </div>

              <div class="menu-item here  menu-accordion">
                <span class="menu-link">
                  <span class="menu-icon">
                    <i class="ki-duotone ki-element-7 fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">محصولات</span>
                  <span class="menu-arrow"></span>
                </span>

                <div class="menu-sub menu-sub-accordion">
                  <div class="menu-item">
                    <a class="menu-link" href="./products.html">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">بهداشتی</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                data-kt-menu-trigger="click"
                class="menu-item here menu-accordion"
              >
                <span class="menu-link">
                  <span class="menu-icon">
                    <i class="ki-duotone ki-element-7 fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">تنظیمات</span>
                  <span class="menu-arrow"></span>
                </span>

                <div class="menu-sub menu-sub-accordion @if (Request::is('admin/configs/*')) show @endif">
                  <div class="menu-item">
                    <a
                      class="menu-link {{ Request::routeIs('admin.configs.view') ? 'active' : '' }}"
                      href="{{ route('admin.configs.view') }}"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">تنظیمات اصلی</span>
                    </a>

                    <a
                      class="menu-link {{ Request::routeIs('admin.configs.permissions.list') ? 'active' : '' }}"
                      href="{{ route('admin.configs.permissions.list') }}"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">0</span>
                    </a>
                  </div>

                  <div class="menu-item">
                    <a
                      class="menu-link {{ Request::routeIs('admin.configs.roles.list') ? 'active' : '' }}"
                      href="{{ route('admin.configs.roles.list') }}"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">1</span>
                    </a>
                  </div>

                  <div class="menu-item">
                    <a
                      class="menu-link {{ Request::routeIs('admin.configs.users.list') ? 'active' : '' }}"
                      href="{{ route('admin.configs.users.list') }}"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">2</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
