export function ToMail({email, subject="", body="",children}){
    let params="";
    const qs=[];
    if (subject) qs.push(`subject=${encodeURIComponent(subject)}`);
    if (body) qs.push(`body=${encodeURIComponent(body)}`);
    if (qs.length) params =`?${qs.join("&")}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
}

export function ToCall({phone,children}){
    return <a href={`tel:${phone}`}>{children}</a>;
}