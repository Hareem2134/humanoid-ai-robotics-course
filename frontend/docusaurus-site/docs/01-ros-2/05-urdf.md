---
title: Understanding URDF
---

The Unified Robot Description Format (URDF) is an XML format for representing a robot model. In ROS, URDF is the standard way to describe the physical structure of a robot, including its links, joints, and sensors.

## Key URDF Elements

A URDF file consists of a set of XML elements that describe the robot. The main elements are:

*   `<robot>`: The root element of the URDF file.
*   `<link>`: A rigid body of the robot. Each link has a name, a visual representation, a collision model, and an inertial model.
*   `<joint>`: A connection between two links. Each joint has a name, a type (e.g., `revolute`, `continuous`, `prismatic`, `fixed`), a parent link, and a child link.

## Example URDF

Here is an example of a simple URDF file for a two-link robotic arm:

```xml
<robot name="simple_arm">
  <link name="base_link">
    <visual>
      <geometry>
        <cylinder length="0.2" radius="0.1"/>
      </geometry>
    </visual>
  </link>
  <link name="arm_link">
    <visual>
      <geometry>
        <box size="0.5 0.1 0.1"/>
      </geometry>
    </visual>
  </link>
  <joint name="base_to_arm" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
    <axis xyz="0 0 1"/>
    <limit effort="1000.0" lower="0.0" upper="0.548" velocity="0.5"/>
  </joint>
</robot>
```

## Visualizing URDF in RViz2

RViz2 is a 3D visualization tool for ROS. You can use RViz2 to visualize your URDF model and see how it will look in the real world.

To visualize a URDF file in RViz2, you need to launch the `robot_state_publisher` node, which reads the URDF file and publishes the robot's state to the `/robot_description` topic. Then, you can launch RViz2 and add a "RobotModel" display to see your robot.

This concludes our introduction to ROS 2. In the next module, we will learn how to simulate robots in Gazebo and Unity.
