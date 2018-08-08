/** Rail Announcements Generator. By Roy Curtis, MIT license, 2018 */

/** Holds vox editor runtime configuration */
export class EditorConfig
{
    /** Recording device ID to use */
    public deviceId : string = 'default';

    /** Safely loads runtime configuration from localStorage, if any */
    public constructor(load: boolean)
    {
        if (!load || !window.localStorage['settings'])
            return;

        try
        {
            let config = JSON.parse(window.localStorage['settings']);
            Object.assign(this, config);
        }
        catch (e)
        {
            alert( L.CONFIG_LOAD_FAIL(e.message) );
            console.error(e);
        }
    }

    /** Safely saves runtime configuration to localStorage */
    public save() : void
    {
        try
        {
            window.localStorage['settings'] = JSON.stringify(this);
        }
        catch (e)
        {
            alert( L.CONFIG_SAVE_FAIL(e.message) );
            console.error(e);
        }
    }

    /** Safely deletes runtime configuration from localStorage and resets state */
    public reset() : void
    {
        try
        {
            Object.assign( this, new EditorConfig(false) );
            window.localStorage.removeItem('settings');
        }
        catch (e)
        {
            alert( L.CONFIG_RESET_FAIL(e.message) );
            console.error(e);
        }
    }
}