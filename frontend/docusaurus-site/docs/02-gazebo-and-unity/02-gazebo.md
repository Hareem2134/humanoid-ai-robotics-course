---
title: Gazebo for Simulation
---

Gazebo is a powerful and widely used open-source robotics simulator. It allows you to simulate robots in complex and realistic environments, with support for a wide range of sensors and physics engines.

## Key Features of Gazebo

*   **Physics Simulation:** Gazebo uses physics engines such as ODE and Bullet to simulate realistic interactions between objects, including collisions, gravity, and friction.
*   **Sensor Simulation:** Gazebo can simulate a wide variety of sensors, including cameras, LiDAR, IMUs, and more.
*   **ROS Integration:** Gazebo is tightly integrated with ROS, making it easy to control your simulated robot using ROS nodes and messages.
*   **Extensible:** Gazebo is highly extensible, with a plugin-based architecture that allows you to add new sensors, models, and functionalities.

## Creating a Gazebo World

A Gazebo world is an SDF (Simulation Description Format) file that describes the environment in which your robot will be simulated. Here is an example of a simple world file with a ground plane and a box:

```xml
<sdf version="1.6">
  <world name="default">
    <include>
      <uri>model://ground_plane</uri>
    </include>
    <include>
      <uri>model://sun</uri>
    </include>
    <model name="box">
      <pose>0 0 0.5 0 0 0</pose>
      <link name="link">
        <collision name="collision">
          <geometry>
            <box>
              <size>1 1 1</size>
            </box>
          </geometry>
        </collision>
        <visual name="visual">
          <geometry>
            <box>
              <size>1 1 1</size>
            </box>
          </geometry>
        </visual>
      </link>
    </model>
  </world>
</sdf>
```

## Spawning a Robot in Gazebo

To spawn a robot in Gazebo, you can use the `ros2 run gazebo_ros spawn_entity.py` command. This command takes the robot's URDF file and spawns it in the Gazebo world.

```bash
ros2 run gazebo_ros spawn_entity.py -entity my_robot -file my_robot.urdf
```

In the next section, we will explore Unity, another powerful simulation platform that is often used for photorealistic rendering and human-robot interaction.
