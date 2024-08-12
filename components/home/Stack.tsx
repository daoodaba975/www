import React from "react";

import Figma from "../svg/Figma";
import JavaScript from "../svg/JavaScript";
import TypeScript from "../svg/TypeScript";
import Dart from "../svg/Dart";
import Ruby from "../svg/Ruby";
import ReactJS from "../svg/ReactJS";
import Next from "../svg/Next";
import Flutter from "../svg/Flutter";
import Rails from "../svg/Rails";
import Tailwind from "../svg/Tailwind";
import HeadlessUI from "../svg/HeadlessUI";
import Redis from "../svg/Redis";
import Firebase from "../svg/Firebase";
import Pocketbase from "../svg/PocketBase";
import Docker from "../svg/Docker";
import GraphQL from "../svg/GraphQL";
import Swagger from "../svg/Swagger";
import Playwright from "../svg/Playwright";
import Cucumber from "../svg/Cucumber";
import Postman from "../svg/Postman";

const Stack = () => {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-raisin dark:text-snow">
        📦 Stacks.
      </h2>

      <div className="space-y-3">
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Design :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Figma />
                Figma
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Languages :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <JavaScript />
                JavaScript
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <TypeScript />
                TypeScript
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Dart />
                Dart
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Ruby />
                Ruby
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Frameworks :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <ReactJS />
                React
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Next />
                Next
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Rails />
                Rails
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Mobile :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Flutter />
                Flutter
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              UI :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Tailwind />
                Tailwind
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <HeadlessUI />
                HeadlessUI
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Databases :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Redis />
                Redis
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Firebase />
                Firebase
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Pocketbase />
                Pocketbase
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Test :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Playwright />
                Playwright
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Cucumber />
                Cucumber
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Postman />
                Postman
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Tools :
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Docker />
                Docker
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                <GraphQL />
                GraphQL
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                <Swagger />
                Swagger
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Expertise:
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Web Development
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Project Management
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Mobile Apps
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                Testing
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-raisin dark:text-snow">
              Soft Skills:
            </span>
          </dt>
          <dd>
            <ul>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Strong communication
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Problem-solving
              </li>
              <li className="me-1 after:content-[','] inline-flex items-center text-sm text-raisin dark:text-snow">
                Attention to detail
              </li>
              <li className="me-1 after:content-['.'] inline-flex items-center text-sm text-raisin dark:text-snow">
                Time management
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Stack;
