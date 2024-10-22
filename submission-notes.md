To manage and track changes to the pipeline statuses of targets, we'll need to design a database schema that can store the history of changes and implement a data update strategy that ensures data consistency and integrity. Here's a proposed strategy:

**Database Schema:**

We'll use a relational database management system like MySQL or PostgreSQL. The schema will consist of one tables

1. **cdc_log**:
	* entity_id
    * lock_id  
	* entity_type
	* message	
	* timestamp	

**Data Update Strategy:**

To ensure data consistency and integrity, we'll implement the following data update strategy:

1. **Insert-only approach**: When a pipeline status change is made, we'll insert a new record into the cdc_log table. This will allow us to maintain a history of changes.
2. **Use transactions**: When updating the pipeline status, we'll use transactions to ensure that either all changes are committed or none are. This will prevent partial updates and ensure data consistency.
3. **Locking mechanism**: To prevent concurrent updates, we can use Optimistic Lock mechanism to ensure that other users are not able to make changes to the same target while the update is in progress.
lock_id column will be incremented on transaction commit. It would be only incremented if current lock_id is equal to lock_id supplied in the parameter.
4. **Validation and error handling**: We'll implement validation checks to ensure that the new pipeline status is valid and that the user has the necessary permissions to make the change. We'll also implement error handling to catch and handle any errors that may occur during the update process.


**Benefits:**

This strategy provides several benefits, including:

* **Audit trail**: We can maintain a history of changes to the pipeline status, which can be useful for auditing and tracking purposes.
* **Data consistency**: The use of transactions and locking mechanisms ensures that data is consistent and accurate.
* **Error handling**: We can catch and handle errors that may occur during the update process, which can help prevent data corruption.

