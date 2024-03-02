class Login
{
    login(userid,password)
    {
        let dbpass=getCookie(userid);
        if(dbpass==null) return false;
        else
        {
            if(dbpass==password)
            {
                setCookie("flag","true",30);
                setCookie("whoami",userid,30);
                return true;
            }
            else return false;
        }
    }
    logoff()
    {
        setCookie("flag","",-1);
        setCookie("whoami","",-1);
    }
    register(userid,password)
    {
        if(getCookie(userid)==null)
        {
            setCookie(userid,password,30);
            return true;
        }
        else return false;
    }
}