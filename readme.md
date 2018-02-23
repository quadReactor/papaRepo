# greenField - instaSmurf #


# git workflow # 
create org repo
everyone clone org repo
create feature branch
*   git checkout -b FEATURE_NAME
work on feature branch
when finished
*   git push origin FEATURE_NAME
make pull request from feature branch to master
 
//to get latest changes
* git checkout master
* git pull origin master
* git checkout FEATURE_NAME
* git rebase master
MASTER ONLY PULL AND REBASE


This repo serves as the homepage for HRLA20 greenField project

## General Info ##

 * Master: John
   * 1
   * 2
   * 3

## Router ##

*get('/');

//Sign up

*post("/login");

*post("/signup");

*post("/logout");

// Render Feed

*get('/:username')

*get('/:username/follower')

*get('/:username/all')

// Modify Followers 

router.post('/:username/follower', () => {}); // add follower
router.put('/:username/follower', () => {}); // approve follower
router.delete('/:username/follower', () => {}); // remove follower

// comment 

router.get('/:username/:photoId/comments', (req, res) => {
  //params now has two things in the object, username and photoID
  console.log(req.params.photoId)
  res.send("hiiii")

}); //retrieve comments for individual photo to render
router.post('/:username/:photoId/comments', () => {}); // add

router.delete('/:username/:photoId/comments', () => {}); //delete

router.put('/:username/:photoId/comments', () => {}); //edit 

// Post New Photo ---------------------------------------------

router.post('/:username/content', () => {}); // add new post

router.delete('/:username/content', () => {}); // delete post

// Likes --------------------------------------------------------

router.post('/:photoId/like', () => {}); // add a like

router.delete('/:photoId/like', () => {}); // remove a like

## Scheme ##

---        | Users        | ---
---        | ---          | ---
User       |String        | Uniq
UserId     |String        | Uniq
Followers  |Array         | 
Following  |Array         | 
ProfilePic |String        | 
Bio        |String        |

---        | Comment      | ---
---        | ---          | ---
User       |String        | 
Photo      |IDphoto       | 
Text       |String        | 
Date       |TimeStamp     | 

---        | Photo        | ---
---        | ---          | ---
User       |String        | 
PhotoUrl   |String        | 
Description|String        | 
Likes      |String Array  | 

*Note:* We must fill this


## Work Break Down ##

 * Week 1
   * 1
   * 2
   * 3
