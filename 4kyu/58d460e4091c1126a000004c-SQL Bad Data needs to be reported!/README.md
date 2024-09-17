*(kata renovated by bornForThis, with a help of Twilight_Sun)*

# Background Story:
At Bapple company, a recent review of shipment reports uncovered a significant issue: many sales were linked to addresses that didn't match the purchasing customer's details. Delving deeper, it was found that two specific problems were prevalent. First, some customers had made purchases using addresses that didn't correspond to any on their accounts, indicating the use of incorrect or unrelated addresses. Secondly, and perhaps more troubling, was the discovery that a subset of customers had no address on file at all, yet had successfully completed transactions.

This situation presented a unique opportunity for the CEO, who decided to focus on those customers who spent $199 or more. He reasoned that these higher-spending customers would be more engaged and might welcome further interaction, especially when contacted about the address discrepancies. However, this approach meant neglecting those who spent less, which brought an ethical dimension to the strategy. Despite this, the CEO's plan was clear: to turn this logistical error into a sales opportunity, prioritizing customers who showed a greater potential for future business.

# Tast Description:
We have the following DB schema:
+ customers:
    + customerid (int): The unique identifier for each customer.
    + email (varchar): The email address of the customer.
+ addresses:
    + addressid (int): The unique identifier for each address.
    + customerid (int): Foreign key that references customerid in the customers table. Indicates which customer an address belongs to.
    + address (varchar): The street address.
    + city (varchar): The city of the address.
    + state (char): The state of the address.
    + zipcode (varchar): The zipcode of the address.
+ sales:
    + salesid (int): The unique identifier for each sale.
    + customerid (int): Foreign key that references customerid in the customers table. Indicates which customer made the sale.
    + addressid (int, nullable): Foreign key that references addressid in the addresses table. Indicates the address used for the sale.
    + itemdescription (varchar): Description of the item sold.
    + price (float): The price of the item sold.
+ salesreps:
    + salesrepid (int): The unique identifier for each sales representative.
    + firstname (varchar): The first name of the sales representative.
    + lastname (varchar, nullable): The last name of the sales representative.
    + hiredate (datetime): The date when the sales representative was hired.

# Objective:
**Create a report identifying customers who either used an incorrect address or have no address on file, with purchases totaling $199 or more.**
+ Incorrect Address: This refers to instances where the address linked to a customer's purchase in the sales table does not match any address associated with that customer in the addresses table. It indicates a mismatch, suggesting the customer might have inadvertently or intentionally used an address that is not theirs.
+ No Address on File: This means that the customer has made purchases but does not have any associated address in the addresses table. In essence, these customers have completed transactions without providing or selecting a valid address for shipment.

# Assignment of Sales Reps:
There are 3 sales representatives in the company.
The goal is to distribute the identified customers among these reps as evenly as possible.
"As evenly as possible" means that each sales rep should have a roughly equal number of customers to contact.
Prioritize reps with earlier hire dates (ascending order of hiredate) when assigning customers. If the first rep can be assigned a customer, they should be; if not, move to the next rep in seniority, and so on. We can be sure that there are no reps with the same hiredate.

# Email Scripts:
Two different scripts are required for the sales reps based on the customer's address status:
+ For customers with an address:
    > "You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address."
+ For customers without an address:
    > "You've spent enough money with us so we care about your business. You don't have an address on file yet you've selected an address. Please login to our site and add an address so we may use it... Don't ask any questions on how this happened."

# Expected Output for the Report:
+ email (varchar): This column should display the email address of the customer. It is used to identify each customer uniquely and as a means of contact for the sales reps.
+ total_bought (float): This column represents the total dollar amount of products purchased by the customer. It is calculated as the sum of all purchases made by the customer that meet the criteria (total purchases of $199 or more).
+ rep_name (varchar): This column displays the name of the sales representative assigned to contact the customer. The name should be formatted as 'firstname lastname'. If there is no last name (it can be either empty string or null), only the first name should be displayed with no trailing space.
+ script (varchar): This column contains the script that the sales representative is to use in the email to the customer. The script varies based on whether the customer has an incorrect address or no address on file. It provides tailored instructions to the customer for correcting their address information.

The primary ordering of the report should be based on the total_bought column in descending order. This ensures that customers who spent the most are listed first. In case of a tie in the total_bought values, use the email column (in ascending alphabetical order) as a secondary ordering criterion.

# Desired Output
The desired output should look like this:
| email                  | total_bought | rep_name       | script                                                                                                                                                                                                                                              |
| :--------------------- | :----------- | :------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test1@testdomain.com` | 2002         | Jack           | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |
| `test7@testdomain.com` | 978.44       | Tyler Durden   | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |
| `test4@testdomain.com` | 695          | Robert Paulson | `You've spent enough money with us so we care about your business. You don't have an address on file yet you've selected an address. Please login to our site and add an address so we may use it... Don't ask any questions on how this happened.` |
| `test3@testdomain.com` | 694          | Jack           | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |
| `test2@testdomain.com` | 339          | Tyler Durden   | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |
| `test6@testdomain.com` | 256          | Robert Paulson | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |
| `test5@testdomain.com` | 199          | Jack           | `You've spent enough money with us so we care about your business. Unfortunately you have selected a bad address. Please login to our site and select a good address.`                                                                              |

GLHF!