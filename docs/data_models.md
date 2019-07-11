# Data Models
This document aims to give a description of the way data will be modelled in the application.

## Style Guides
While this is not binding as of yet. The importance of styleguides especially in a project that will be worked on by multiple users - _from multiple backgrounds_ cannot be overstated.
Right now (_11th July_), the choice of a Database hasnt been made and is indeed mostly at the whims of @ogbanugot . However here is a [styleguide](https://www.sqlstyle.guide) we can follow.

## Models

### Organization
| organizationId       | organizationName          |
| ------------- |:-------------:|
| `number`      | `string` |


### Stage
| stageId       | processId           | order  |  task  |  deadline    | 
| ------------- |:-------------:| -----:| -------: | ------: |
| `number`      | `number` | `number` |  `number` | `timestamp` |


### Task
| taskId       | taskType           | stageId  |  formId |  documentId    | 
| ------------- |:-------------:| -----:| -------: | ------: |
| `number`      | `TASKTYPE` | `number` |  `number` | `number` |

### User


### Member


### 