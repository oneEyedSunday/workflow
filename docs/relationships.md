# Relationships, Actors & Actions
Relationships describe how elements (actors and [actions](./actions.md)) in this system will interact with each other.
For now, we have the following elements in the system:
* [Organization](#Organization)
* [Entity](#Entity)
* [Member](#Member)
* [User](#User)
* [Group](#Groups) (_under discussion_)
* [Process](#Process)
* [Stage](#Stage)
* [Task](#Task)
* [Privileges](#Privilege)

## Organization
An organization is the highest entity level, an organization is a group of members having a set of processes.

## Entity
An entity is a collection of organization members characterized by their ability to perform certain actions

## User
A user is a description of a real life actor.

## Member
A member is a user who has access to an organization. 
*Sidenotes*
* _should members explicitly choose organizations?_
* _which would make organizations not really private_
* _I feel membership should be on an invitational basis_


## Groups
A collection of members that share the same authorization & privileges. This is a means to break potential clashes in permissions & privileges.
A group can potentially be used to aggregate members that frequently perform certain tasks together

## Process
A process is a aggregation of stages grouped in order of execution.

## Stage
A stage is a point of execution of an activity. A stage will typically contain a task to be performed, members, entities or groups to whom the task is assigned or expected to be accomplished by and optionally a deadline.

## Task
A task is an activity that is to be performed.

## Privilege
Privileges are our means of access control - *Authorization* to be precise.
