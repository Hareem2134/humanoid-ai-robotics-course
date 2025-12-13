---
title: Visual SLAM
---

Visual Simultaneous Localization and Mapping (VSLAM) is a technique that allows a robot to build a map of its environment while simultaneously tracking its own location within that map. VSLAM is a crucial technology for autonomous navigation, as it allows a robot to navigate in an unknown environment without the need for an external localization system such as GPS.

## Types of VSLAM

There are several different types of VSLAM, each with its own advantages and disadvantages:

*   **Monocular VSLAM:** This type of VSLAM uses a single camera to build a map and track the robot's location. Monocular VSLAM is challenging because it is difficult to estimate the scale of the environment from a single camera.
*   **Stereo VSLAM:** This type of VSLAM uses a stereo camera, which consists of two cameras that are mounted a fixed distance apart. Stereo VSLAM can estimate the scale of the environment, which makes it more robust than monocular VSLAM.
*   **RGB-D VSLAM:** This type of VSLAM uses an RGB-D camera, which provides both a color image and a depth image. The depth image makes it much easier to build a map of the environment, and it makes the VSLAM system more robust to changes in lighting.

## VSLAM with Isaac ROS

NVIDIA Isaac ROS is a collection of hardware-accelerated packages for ROS that are optimized for the NVIDIA Jetson platform. Isaac ROS includes a VSLAM package that is based on the popular ORB-SLAM3 algorithm. This package can be used to perform VSLAM on a Jetson-powered robot, and it can be easily integrated with other ROS packages for navigation and control.

In the next section, we will learn how to use the Nav2 stack for path planning with a humanoid robot.
