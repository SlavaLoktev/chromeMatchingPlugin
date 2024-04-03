import { useEffect, useState } from "react"
import { Version3Client } from 'jira.js';
import { getCurrentTab } from "../../helpers/tabs";
import { storage } from "webextension-polyfill";

export const View = () => {

    // Click 
    const [value, setValue] = useState()

    useEffect(() => {
        const readBackgroundMessage = async () => {
            const tab = await getCurrentTab()
            const tabId = tab.id

            if (tabId) {
                const data = await storage.local.get(tabId.toString())
                const currentValue = data?.[tabId] ?? 0

                setValue(currentValue)
            }
        }
        readBackgroundMessage()
    }, [])
    // Click 

    // const [value, setValue] = useState<any | null>(null);

    // useEffect(() => {

    //     const readInfo = async () => {
    //         const client = new Version3Client({
    //             host: 'http://localhost:2990/jira',
    //             authentication: {
    //               basic: {
    //                 username: 'admin',
    //                 password: 'admin',
    //               },
    //             },
    //           });
    
    //         //const projects = await client.projects.getProject();
    //         const issues = await client.issues.getEvents(); 
    //         const myself = await client.myself.getCurrentUser();
    //         //const currentValue = issues?.toString
    //         const currentValue = [issues, myself]
    //         console.log(currentValue)
    //         setValue(currentValue)
    //     }
    //     readInfo()
    // }, [])

    //const value = 0
    return (
        <div style={{
            height: '100vh',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            Clicks: {value}
        </div>
    )
}