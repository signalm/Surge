let obj = JSON.parse($response.body);
obj.socials["twitter"] = "";
obj.location = "";
obj.pro_plan = "pro_premium_trial";
obj.status = "";
obj.following_count = 0;
obj.follow_status = false;
obj.is_online = false;
obj.avatars.["mid"] = "";
obj.avatars.["big"] = "";
obj.avatars.["small"] = "";
obj.avatars.["orig"] = null;
$done({body: JSON.stringify(obj)});
